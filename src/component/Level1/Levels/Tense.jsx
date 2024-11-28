import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Tense = () => {

  const data = useSelector((state) => state.subTopicList.Tense);

  const showData = data.map((data, index) => 
    <div className='w-25 h-50 border border-3 border-primary my-4' key={data.id}>
      <Link to={"/MainLevelList/Tense"+ data.path} className='text-decoration-none'>
        <div className='w-100' style={{ height: "240px" }}>
          <img src='/img.png' className='w-100 h-100' />
        </div>
        <p className='text-center mt-1 fs-4 fw-bolder'>{data.name}</p>
      </Link>
    </div>
  );

  return (
    <>
      <div className="w-100 d-flex align-items-center">
        <div className="d-flex flex-column align-items-center w-100">
          {showData}
        </div>
      </div>
    </>
  )
}

export default Tense
