import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { DataState, setCurrentPagePhotos } from "../reducer/reducers";

const Photos:React.FC = () => {
  const dispatch = useDispatch();


    const photos = useSelector((state: {data: DataState}) => state.data.photos);
    const currentPagePhoto = useSelector((state: {data: DataState}) => state.data.currentPagePhotos);
    const photosPerPage = useSelector((state: {data: DataState}) => state.data.photosPerPage);

    const indexOfLastPhoto = currentPagePhoto * photosPerPage;
    const indexOfFirstPost = indexOfLastPhoto - photosPerPage;

    const currentPhotos = photos.slice(indexOfFirstPost, indexOfLastPhoto);

    const previousPage = () => {
        dispatch(setCurrentPagePhotos(currentPagePhoto - 1));
      }

  const nextPage = () => {
    dispatch(setCurrentPagePhotos(currentPagePhoto + 1));
    }

  return (
    <>
       <h2>Photos</h2>
            <ul>
            {currentPhotos.map((photo) => (
      <li key={photo.id}>
      <img src={photo.url} alt={photo.title} />
    </li>
  ))}
            </ul>
            <button disabled={currentPagePhoto === 1} onClick={previousPage}>Previous page</button>
            <button disabled={indexOfLastPhoto >= photos.length} onClick={nextPage}>Next Page</button>
    </>
  )
}

export default Photos;
