import React, { Component } from "react";
import "./hobbySearcher.css";
import axios from "axios";

class HobbySearcher extends Component {
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
    const { isAlphabetical, isReverseAlphabetical } = this.props;

    // Przygotowanie listy hobby
    let hobbiesList = this.state.hobbies;

    // Sortowanie na podstawie propsów
    if (hobbiesList) {
      if (isAlphabetical) {
        hobbiesList = [...hobbiesList].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (isReverseAlphabetical) {
        hobbiesList = [...hobbiesList].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
    }

    // Mapowanie na elementy JSX
    const renderedHobbies =
      hobbiesList &&
      hobbiesList.map((hobby) => {
        return (
          <div className="hobby" key={hobby.id}>
            <p>{hobby.name}</p>
            <span>{hobby.description}</span>
            <h3>Tagi:</h3>
            <ul>
              {hobby.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            {hobby.resources && (
              <div className="resources">
                {hobby.resources.links && hobby.resources.links.length > 0 && (
                  <div className="links">
                    <h3>Przydatne linki:</h3>
                    <ul>
                      {hobby.resources.links.map((link, index) => (
                        <li key={index}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {hobby.resources.videos && hobby.resources.videos.length > 0 && (
                  <div className="videos">
                    <h3>Filmy:</h3>
                    <ul>
                      {hobby.resources.videos.map((video, index) => (
                        <li key={index}>
                          <a
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
        );
      });

    return (
      <div>
        {renderedHobbies ? renderedHobbies : <h1>Nie udało się wczytać bazy hobby :(</h1>}
      </div>
    );
  }
}

export default HobbySearcher;