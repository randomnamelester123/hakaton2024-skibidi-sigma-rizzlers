import React, { useState } from "react";
import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../footer/footer";
import HobbySearcher from "../hobbySearcher/hobbySearcher";
import Filter from "../filter/filter";

function Search() {
    const [isAlphabetical, setIsAlphabetical] = useState(false);
    const [isReverseAlphabetical, setIsReverseAlphabetical] = useState(false);

    const handleClickReset = () => {
        setIsAlphabetical(false);
        setIsReverseAlphabetical(false);
    };

    const handleClickAlphabetical = () => {
        setIsAlphabetical(true);
        setIsReverseAlphabetical(false);
    };

    const handleClickReverseAlphabetical = () => {
        setIsAlphabetical(false);
        setIsReverseAlphabetical(true);
    };

    return (
        <div className="mainContainer">
            <Header />
            <Navigation />
            <Filter
                onReset={handleClickReset}
                onAlphabetical={handleClickAlphabetical}
                onReverseAlphabetical={handleClickReverseAlphabetical}
            />
            <HobbySearcher
                address="/hobby_template.json"
                isAlphabetical={isAlphabetical}
                isReverseAlphabetical={isReverseAlphabetical}
            />
            <Footer />
        </div>
    );
}

export default Search;