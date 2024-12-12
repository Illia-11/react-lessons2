
import ComponentC from '../C';
const ComponentB = (props) => {
  const { forB, ...restOfBProps } = props;
  return (
    <article style={{ border: '2px solid green', padding: '20px' }}>
      <h2>ComponentB</h2>
      <p>{forB}</p>
      <ComponentC {...restOfBProps} />
    </article>
  );
};

export default ComponentB;