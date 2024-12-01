import React, { Component } from "react";
import './hobbySearcher/hobbySearcher.css';
import axios from "axios";

class TestowyRekord extends Component {
  state = {
    hobbies: null,
  };

  componentDidMount() {
    axios
      .get(this.props.address)
      .then((res) => {
        this.setState({
          hobbies: res.data,
        });
      })
      .catch((error) => {
        console.error("Błąd zapytania API:", error);
      });
  }

  render() {
    const { hobbies } = this.state;

    const firstHobby = hobbies && hobbies[0];

    return (
      <div>
        {firstHobby ? (
          <div className="hobby" key={firstHobby.id}>
            <h1>Twoje nowe skibidi hobby to:</h1>
            <p>{firstHobby.name}</p>
            <span>{firstHobby.description}</span>
            <h3>Tagi:</h3>
            <ul>
              {firstHobby.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            {firstHobby.resources && (
              <div className="resources">
                {firstHobby.resources.links && firstHobby.resources.links.length > 0 && (
                  <div className="links">
                    <h3>Przydatne linki:</h3>
                    <ul>
                      {firstHobby.resources.links.map((link, index) => (
                        <li key={index}>
                          <a href={link.url} target="_blank" rel="noopener noreferrer">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {firstHobby.resources.videos && firstHobby.resources.videos.length > 0 && (
                  <div className="videos">
                    <h3>Filmy:</h3>
                    <ul>
                      {firstHobby.resources.videos.map((video, index) => (
                        <li key={index}>
                          <a href={video.url} target="_blank" rel="noopener noreferrer">
                            {video.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <h1>Nie udało się wczytać bazy hobby :(</h1>
        )}
      </div>
    );
  }
}

export default TestowyRekord;