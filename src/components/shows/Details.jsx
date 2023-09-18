import styled from 'styled-components';
const Details = ({ status, premiered, network }) => {
  return (
    <div>
      <DetailsWrapper>
        <p>Status : {status}</p>
        <p>
          Premiered : {premiered} {network ? `on ${network.name}` : null}
        </p>
      </DetailsWrapper>
    </div>
  );
};

export default Details;

const DetailsWrapper = styled.div`
  p {
    margin: 5px 0;
  }
`;
