import './directory.styles.scss';
import CategoryItem from '../category-item/category.component';
const Directory = ({data}) => {
  
  
    return(
        
    <div className='categories-container'>
    {data.map((category) => (
      
      <CategoryItem category={category} key={category.id}/>
    ))
    }
  </div>
    )
}

export default Directory;