import React, { useEffect, useState } from 'react';
import { getData, IData } from './api';

const App = () => {
    const [data, setData] = useState<IData[]>([]);

    useEffect(() => {
        getData()
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (data.length) {
            const node = document.createElement('ul');
            const result = convertDataToTree(data, node);
            const test = document.querySelector('#test');
            if (test) {
                test.append(result);
            }
        }
    }, [data]);

    const convertDataToTree = (data: IData[], node: HTMLUListElement): any => {
        for (let i = 0; i < data.length; i++) {
            const parentNode = document.createElement('ul');
            if (data[i].sub_sections) {
                parentNode.innerHTML = `<li><h1>${data[i].section_name}</h1></li>`;
                convertDataToTree(data[i].sub_sections!, parentNode);
            } else {
                parentNode.innerHTML = `<li><h1>${data[i].section_name}</h1><span>${data[i].text}</span></li>`;
            }
            node.append(parentNode);
        }
        return node;
    };

    return <div id={'test'} />;
};
export default App;
