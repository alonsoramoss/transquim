import Image from "next/image"

const CoolBackground = () =>{
  return(

  <Image
    src="/img/pattern.webp"
    alt="Cool Background"
    width={310}
    height={310}
    className="hidden lg:block lg:absolute lg:top-0 lg:right-5"
  />
  );
};

export default CoolBackground;