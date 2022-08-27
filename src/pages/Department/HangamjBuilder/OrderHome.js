import React, { useState, Fragment, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../../components/Header';

function HangamjBuilder() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDevices();
  }, []);

  const getDevices = async () => {
    const response = await axios.get('http://192.168.10.25:5001/api/device');
    if (response.status === 200) {
      setData(response.data);
    }
  };
  const onDeleteDevice = async (id) => {
    if (window.confirm('are tou sure to delete')) {
      const response = await axios.delete(
        'http://192.168.10.25:5001/api/device/${id}'
      );
      if (response.status === 200) {
        toast.success(response.data);
        getDevices();
      }
    }
  };
  console.log('data=>', data);
  return (
    <div>
      <Header />
      <h2>Захиалга хуудас</h2>
      <Button href='/Orders' type='submit'>
        Шинэ захиалга
      </Button>
      <div className='row'>
        <div className='col-mb-6'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th> </th>
                <th style={{ testAlign: 'center' }}>#</th>
                <th style={{ testAlign: 'center' }}>Нэр</th>
                <th style={{ testAlign: 'center' }}>Үндсэн хэсэг</th>
                <th style={{ testAlign: 'center' }}>Захиалагч</th>
                <th style={{ testAlign: 'center' }}>Огноо</th>
                <th style={{ testAlign: 'center' }}>Төхөөрөмж</th>
                <th style={{ testAlign: 'center' }}>Төрөл</th>
                <th style={{ testAlign: 'center' }}>Сэлбэгийн дугаар</th>
                <th style={{ testAlign: 'center' }}>Материалын нэр</th>
                <th style={{ testAlign: 'center' }}>Тоо/Хэмжээ</th>
                <th style={{ testAlign: 'center' }}>Шаардлага</th>
                <th style={{ testAlign: 'center' }}>Тайлбар</th>
                <th style={{ testAlign: 'center' }}>Төлөв</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope='row'>{index + 1}</th>
                      <th>
                        <button type='button'>Edit</button>
                      </th>
                      <th>{item.oid}</th>
                      <th>{item.name}</th>
                      <th>{item.department}</th>
                      <th>Программ хангамж</th>
                      <th>{item.date}</th>
                      <th>Monitor</th>
                      <th>Энгийн</th>
                      <th>Inspiron 1999555</th>
                      <th> </th>
                      <th>10</th>
                      <th>144hz</th>
                      <th>Агуулхад байхгүй</th>
                      <th>Баталгаажсан</th>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default HangamjBuilder;
