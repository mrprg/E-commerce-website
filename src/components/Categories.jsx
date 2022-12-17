import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categories } from '../data';

const Container = styled.div``

const Categories = () => {
  return (
    <Container>
        { categories.map((item) => (
            <CategoryItem item={item} />
        ))}
    </Container>
  )
}

export default Categories;