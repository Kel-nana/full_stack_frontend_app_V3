export const HeadLine = ({headline, toggle}) => {
   
  return (
    <div> 
        <h2 className={` ${toggle ? 'text-black' : ''}`}>{headline}</h2>
        </div>
  )
}
