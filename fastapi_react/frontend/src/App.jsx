import {Menu, Spin} from 'antd';
import axios from "axios";
import {useEffect, useState} from "react";
import NewCard from "./components/NewCard.jsx";

function getMenuItem(key, label, children) {
  return {
    key: key,
    label: label,
    type: "group",
    icon: null,
    children: children
  }
}

const App = () => {
  const [itemList, setItemList] = useState([]);
  const [itemId, setItemId] = useState(1);
  const [itemData, setItemData] = useState(null);

  const fetchList = () => {
    axios.get('http://127.0.0.1:8000/items').then(r => {
      const listResponces = r.data;
      console.log(listResponces);
      const menuItems = [
          getMenuItem('g1', 'Список',
              listResponces.map(item => {
            return {label: item, key: item}
            })
          ),
      ]
      setItemList(menuItems);
    })
  }

  const fetchItem = () => {
    axios.get(`http://127.0.0.1:8000/items/${itemId}`).then(r => {
      setItemData(r.data)
    })
  }

  useEffect(() => {
    fetchList()
  }, []);

  useEffect(() => {
    setItemData(null);
    fetchItem()
  }, [itemId]);

  const onClick = (e) => {
    console.log('click ', e);
    setItemId(e.key);
    console.log(itemId);
  };

  return (
      <div className="flex">
        <Menu
          onClick={onClick}
          style={{
            width: 256,
          }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={itemList}
          className="h-screen overflow-scroll"
        />
        <div className="mx-auto my-auto">
          {itemId ? <NewCard itemId={itemId} /> : <Spin size="large" />}
        </div>
      </div>
  );
};
export default App;