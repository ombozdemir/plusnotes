import "./App.css";
import {
  Container,
  Row,
  Col,
  Navbar,
  Form,
  Table,
  Card,
  Button,
} from "react-bootstrap";
import MyNavbar from "./components/MyNavBar";

import { getPost, getPosts } from "./services/postService";
import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]); // Filtrelenmiş postlar için state
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // Arama terimi için state

  useEffect(() => {
    setIsLoading(true);

    getPosts()
      .then((response) => {
        setPosts(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Veriler alınamadı:", error);
        setIsLoading(false);
      });
  }, []);

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (searchTerm === "") {
      setFilteredPosts(posts); // Arama terimi boşsa tüm postları göster
      return;
    }

    const filteredPostList = posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm)
      );
    });
    setFilteredPosts(filteredPostList);
  };

  return (
    <Container data-bs-theme="dark">
      <MyNavbar data-bs-theme="dark" />
      <Row>
        <Col>
          <Form.Control
            className="mt-2"
            type="text"
            id="search"
            aria-describedby="Search..."
            onChange={handleSearchChange}
            value={searchTerm} // Arama terimini input'a bağlayın
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            {isLoading ? (
              <div>Veriler Yükleniyor...</div>
            ) : (
              filteredPosts.map((post) => (
                <Col key={post.id}>
                  <Card style={{ width: "18rem" }} className="m-2">
                    <Card.Body>
                      <Card.Title>{post.title}</Card.Title>
                      <Card.Text>{post.content}</Card.Text>
                      <span style={{ float: "right" }}>
                        {new Date(post.createdAt).toLocaleString()}
                      </span>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
