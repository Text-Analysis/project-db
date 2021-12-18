import React from 'react';
import styles from './menu.module.scss';
import Action from './action';
import { IMenu } from '../../types/components';

export const Menu: React.FC<IMenu> = ({ activeSection, setSection }) => {
    return (
        <div className={styles.menu}>
            <Action active={activeSection === 0} onClick={() => setSection(0)}>
                Редактирование документа
            </Action>
            <Action active={activeSection === 1} onClick={() => setSection(1)}>
                Создать документ
            </Action>
            <Action active={activeSection === 2} onClick={() => setSection(2)}>
                Распознать документ
            </Action>
        </div>
    );
};
