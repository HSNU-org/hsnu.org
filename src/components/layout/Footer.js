import React from "react"
import { Container, Row, Col } from "react-bootstrap"

// icons
import medium from "../../images/icons/socialMedia/medium.svg"
import twitter from "../../images/icons/socialMedia/twitter.svg"
import github from "../../images/icons/socialMedia/github.svg"
import patreon from "../../images/icons/socialMedia/patreon.svg"

const Footer = () => {
  const footers = [
    { name: "twitter", link: "https://twitter.com", icon: twitter },
    { name: "medium", link: "https://medium.com", icon: medium },
    { name: "github", link: "https://github.com/HSNU-ORG", icon: github },
    { name: "patreon", link: "https://patreon.com", icon: patreon },
  ]

  return (
    <>
      <footer>
        <Container fluid>
          <Row>
            <Col lg="6" className={"logo"}>
              <h2 className={"is-3 bold"}>
                網管小組辛苦製作的非官方網站，不追蹤一下嗎 🠮
              </h2>
            </Col>
            <Col lg="6" className={"icons"}>
              {footers.map(icon => (
                <a
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={icon.name}
                >
                  <img src={icon.icon} alt={icon.name}></img>
                </a>
              ))}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer
