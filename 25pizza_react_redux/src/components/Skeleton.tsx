import React from 'react'
import ContentLoader from 'react-content-loader';

const Skeleton:React.FC = () => {
  return (
    <ContentLoader 
    //скорость анимации загрузки 
    speed={2}
    //Задаёт ширину заглушки()
    width={280}
    //задаёт высоту заглушки
    height={520}
    //Определяет прямоугольную область просмотра для заглушки(0 0 400 100)
    viewBox='0 0 280 520'
    //задает цвет фона заглушки
    backgroundColor='#f3f3f3'
    //задает цвет переднего плана заглушки
    foregroundColor='#ecebeb'
    >
        {/* Круг */}
      <circle cx={139} cy={139} r={139}/>
      {/* Прямоугольники */}
      {/* 
      x- задаем горизонтальную позицую (отступ) прямоугольника относительно верхнего левога утра заглушки
      y- задаем вертикальную позицую отступ прямоугольника относительно верхнего левого угла загушлки
      rx - задает радиус скругления углов горизонтальных сторон прямоугольника (borderradius схож принцип)
      ry - задает радиус скругления углов вертикальных сторон прямоугольника (borderradius схож принцип)
      width - ширина прямоугольника 
      height - высота прямоугольника 

      */}
      <rect  x={0} y={315} rx={10} ry={10} width={280} height={24}/>
      <rect  x={0} y={355} rx={10} ry={10} width={280} height={88}/>
      <rect  x={0} y={480} rx={10} ry={10} width={88} height={27}/>
      <rect  x={130} y={470} rx={30} ry={30} width={150} height={47}/>
    </ContentLoader>
  )
};

export default Skeleton;
