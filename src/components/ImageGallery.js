import styled from 'styled-components';

const ImageGallery = styled.div`
  display: flex;
  width: 100%;
  overflow: overlay;
  align-items: baseline;
  img {
    margin: 0 30px 25px 0;
    max-height: 700px;
    width: auto;
    -webkit-user-drag: none;

    :last-child {
      margin-right: 0;
    }
  }
  ::-webkit-scrollbar {
    height: 0.5em;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #333;
    border-radius: 50px;
    margin: 5px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
`;

export default ImageGallery;
