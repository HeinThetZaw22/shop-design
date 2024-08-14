"use client";

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className="
    2xl:px-52
    xl:px-32
    md:px-14
    sm:px-10
    px-8
    ">{children}</div>
  )
}

export default Container