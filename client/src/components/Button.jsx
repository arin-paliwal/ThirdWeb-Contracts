import React from 'react'

const Button = ({
  btnType,title,handleClick,styles
}) => {
  return (
    <button
    type={btnType}
    className={`${styles} font-semibold text-[18px] leading-[26px] text-black min-h-[52px] px-4 rounded-[10px]`}
    onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default Button