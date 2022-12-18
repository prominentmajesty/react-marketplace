import React, {useEffect, useState} from 'react';
import {useParams, useParas} from 'react-router-dom';
import {
    collection, 
    getDoc, 
    query, 
    where, 
    orderBy, 
    limit, 
    startAfter
} from 'firebase/firestore';
import {db} from '../firebase.config';
import Spinner from '../component/Spinner';
import ListingItem from '../component/ListingItem';

function Category() {

    const [listings, setListing] = useState(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(() => {
        const fetchListings = async () => {

            try{

                const listingsRef = collection(db, listings);

                const q = query(listingsRef, where('type', '==', params.categoryName), orderBy('timestamp', 'desc'),limit(10));
                const querySnap = await getDoc(q);

                let listings = [];
                querySnap.forEach(element => {
                    return listings.push({
                        id : doc.id,
                        data : doc.data()
                    })
                });

                setListing(listings);
                setLoading(false);

            }catch(err){

            }

        }

        fetchListings();

    }, [])

  return (
    <div className='category'>
        <header>
            <p className="pageHeader">
                {params.categoryName == 'rent' ? 'Placec for rent' : 'Places for sale'}
            </p>
        </header>
        {loading ? <Spinner /> : listings && listings.length > 0 ? (<>
            <main>
                <ul className='categoryListings'>
                    {listings.map((listings) => (
                        <ListingItem listing={listings.data} id={listings.id} key={listings.id}/>
                    ))}
                </ul>
            </main>
        </>) : (<p>No Listins for {params.categoryName}</p>)}
    </div>
  )
}

export default Category