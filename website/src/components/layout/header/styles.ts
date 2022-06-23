import styled from 'styled-components';

export const Hea = styled.header`
  position: fixed;
  max-width: 1200px;
  width: 100%;
  padding: 10px 20px;
  font-size: 16px;
  color: ${props => props.theme.typografia.palette_text_def};
  background: ${props => props.theme.background.palette_background_alt + 20};
`;

export const HeaBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: transparent;
`;

export const BoxContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoxBrand = styled.div`
  margin-right: 30px;
`;

export const BoxLink = styled.div``;

export const BoxItem = styled.li``;

export const BoxToggle = styled.span`
  background: ${props => props.theme.button.palette_background_btn_alt};
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;


  .IconSun {
    position: absolute;
    display: ${props => props.theme.icone.sun_icon};
    top: 50%;
    left: 50%;
    color: black;
    font-size: 20px;
    transform: translate(-50%, -50%);
  }

  .IconMoon {
    position: absolute;
    display: ${props => props.theme.icone.moon_icon};
    color: #fff;
    top: 50%;
    left: 50%;
    color: #fff;
    font-size: 20px;
    transform: translate(-50%, -50%);
  }
`;
