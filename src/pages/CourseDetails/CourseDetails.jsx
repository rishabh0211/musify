import React from 'react'
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();
  return (
    <div>
      {id} Details
    </div>
  );
};

export default CourseDetails
