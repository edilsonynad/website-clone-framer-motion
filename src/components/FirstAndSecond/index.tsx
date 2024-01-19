import React, { ReactNode } from 'react';
import { motion, useTransform } from 'framer-motion';
import { Sticky } from '../../styles/index';


const FirstAndSecond: React.FC =() => {

  const frameOpacity = useTransform();


  return <Sticky  className="second">
    <motion.div style={{ 
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '100vh',
      borderRadius: '4px',
      border: '4px solid #fff',
      opacity: frameOpacity, 
    }} />
  </Sticky>
}

const First: React.FC =() => {
  return <Sticky  className="first"></Sticky>
}

export default FirstAndSecond