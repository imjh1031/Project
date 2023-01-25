import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Category.css';
import lotion from '../../assest/image/lotion.jpg';
import { Link } from 'react-router-dom';



function Category() {
    const [category, setCategory] = useState<string>('');
    const [variables, setVariables] = useState<any[]>([]);
  
  const requestToServer = async (cat: string) => {
    await axios.get('http://localhost:4040/category/list')
    .then(response => {
      const list = response.data.data;
      const tmp = list.filter((item: any) => item.category === cat);
      setVariables(tmp);
      setCategory(cat);
    })
  }
  

    return (
        <div className="Category">
            <div id="wrap">
                <section id="contents01">
                    <div className="list-item-category">
                        <ul className="list-item">
                            <li>
                                <button onClick={() => requestToServer('A')} className="item-category">카테고리1</button>
                            </li>
                            <li>
                                <button onClick={() => requestToServer('B')} className="item-category">카테고리2</button>
                            </li>
                            <li>
                                <button onClick={() => requestToServer('C')} className="item-category">카테고리3</button>
                            </li>
                            <li>
                                <button onClick={() => requestToServer('D')} className="item-category">카테고리4</button>
                            </li>
                        </ul>
                    </div>
                </section>
                <section id="contents02">
                    <div className="additonal-zone"></div>
                    <div className="goods-pick-list">
                        <span className="pick-list-num">페이셜</span>
                    </div>
                    <div className="goods-list">
                        <div className="goods-list-cont">
                            <div className="item-gallery-type">
                                <ul>
                                    {variables.map((item: any) => (
                                        <li style={{ "width": "33.333333333333%" }}>
                                            <div className="item_cont">
                                                <div className="item-photo-box">
                                                    <Link to='/Detailpage'>
                                                        <img src={item.urlResource} alt="인텐시브 페이셜 진정 크림 150ml" width="460" title="인텐시브 페이셜 진정 크림 150ml" className="middle" />
                                                    </Link>
                                                </div>
                                                <div className="item-info-cont">
                                                    <div className="item-tit-box">
                                                        <Link to='/Detailpage'>
                                                            <strong className="item-name">{item.productName}</strong>
                                                        </Link>
                                                    </div>
                                                    <div className="item-money-box">
                                                        <strong className="item-price">
                                                            <span>{item.price}</span>
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </div>
    );
}

export default Category;
