import React, { MouseEvent, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectItemsData } from '../redux/slices/itemsSlice';

const Slider:React.FC = () => {
    const { item } = useSelector(selectItemsData);
    const [mainImage, setMainImage] = useState<string>(item.images[0]);
    const [imageActive, setImageActive] = useState<number>(0);
    const onClickImage = (e:MouseEvent,index:number) => {
        const target = e.target as HTMLImageElement;
        setMainImage(target.currentSrc);
        setImageActive(index);
    }

  return (
    <div>
      <img src={mainImage} alt={item.title} />
      <ul>
        {item.images.map((image:string,index:number)=>(
            <li key={index}>
                <img 
                    src={image}
                    alt=''
                    onClick={(e)=>onClickImage(e,index)}
                />
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Slider;