import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { FaGithub } from 'react-icons/fa';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import Switch from 'react-switch';

import{
  Hea,
  HeaBox,
  BoxContent,
  BoxToggle,
  BoxBrand,
  BoxLink,
  BoxItem
} from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC <Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);

  return(
    <Hea>
      <HeaBox>
        <BoxContent>
          <BoxBrand>
            <BoxItem></BoxItem>
            <BoxItem>Mereles Fernando</BoxItem>
          </BoxBrand>

          <BoxLink>
            Projectos     Posts     Source <FaGithub />
          </BoxLink>
        </BoxContent>

        <BoxToggle className='ToggleSpan'>
          <>
            <Switch
              onChange={ toggleTheme }
              checked={ title === 'dark' }
              checkedIcon={false}
              uncheckedIcon={false}

              width={40}
              height={40}

              uncheckedHandleIcon={<BsSun className='IconSun' />}
              checkedHandleIcon={<BsMoonStarsFill className='IconMoon' />}
              borderRadius={5}
            />
          </>
        </BoxToggle>
      </HeaBox>
    </Hea>
  );
}

export default Header;
