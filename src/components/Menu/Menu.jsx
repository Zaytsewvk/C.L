import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import db from '../../assets/general/db.json';

import './Menu.scss'

const Menu = ({  }) => {

  const [ menuLinks, setMenuLinks ] = useState( null )

  useEffect(() => {
    setMenuLinks( db.menuLinks )
  }, [menuLinks])

  return (
    <div className =  { classNames( 'crypto__menu menu' ) } >



    </div>
  )

}

export default Menu;