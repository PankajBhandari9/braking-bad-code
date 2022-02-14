import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import Header from './Component/Header/Header';
import Posts from './Component/Posts/Posts';
import Pagination from './Component/Pagination';
import Details from './Component/Details/Details';

const App = () => {
    // LOCAL_STORAGE_KEY="listCharacters";

    const [listCharacter, setListCharacter] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);


    // to get the id in the component
    const [charId, setCharId] = useState();

    const getTheData = async () => {
        setLoading(true);
        const res = await axios.get('https://www.breakingbadapi.com/api/characters');
        setListCharacter(res.data);
        // console.log(res.data);
        setLoading(false);
    }


    useEffect(() => {
        getTheData();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentList = listCharacter.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNo) => {
        setCurrentPage(pageNo)
    }

    // character details
    const characterDetails = (cid) => {
        // console.log(cid);
        setCharId(cid);
    }

    // list character total
    const totalChar = listCharacter.length;

    //delete the character

    const deleteChar = (delId) => {
        const updatedItems = listCharacter.filter((listId) => {
            return listId.charId !== delId;
        });
        setListCharacter(updatedItems);
        console.log(updatedItems)
    }
    return (
        <div className="container">
            <Header />
            <div className="row">
                <div className="col-md-9">
                    <Posts listCharacter={currentList} loading={loading} characterDetails={characterDetails} lastIndex={totalChar}
                        deleteChar={deleteChar}
                    />

                </div>
                <div className="col-md-3">
                    <Details charId={charId} currentList={currentList} />

                </div>
                <Pagination currentListLength={currentList.length} totalChar={listCharacter.length} paginate={paginate} />
            </div>
            
        </div>
    )
}

export default App;
