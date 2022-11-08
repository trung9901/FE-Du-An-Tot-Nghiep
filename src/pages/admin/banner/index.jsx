import { Button, Image,  Table, Select, message } from 'antd';
import React, {useEffect, useState} from "react";

import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import { httpDeleteBanner, httpListBanner} from '../../../api/banner';


const ListBanner = () => {
    const { Option } = Select;
  const [data,setData] = useState()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(()=>{
    const data = async()=>{
      const res =  await httpListBanner()
      console.log(res);
      setData(res)
    }
    data()
  },[])
  const columns = [
  
    {
        title: "STT",
        render: (text, object, index) => {
            return index + 1;
          },
        width:50
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (image) => <Image width={200}  src={image} key={image} />,
      
    },
    {
        title: "Hành động",
        dataIndex: "_id",
        key: "action",
        colapse: 2,
        render: (item) => {
      
            return (
             
                <Select
                style={{ width: "170px" , color:"blue", textAlign:"center"}}
                value="Đổi trạng thái"
                >
                  
                    <Option > <Button  onClick={showModal} dataId={item._id}  type="primary" style={{  border: "none", color: "white", width: "100%" }} >
                       Sửa
                    </Button></Option>
                    <Option >  <Button  onClick={()=>{onRemove(item)}}  type="danger" style={{  border: "none", color: "white", width: "100%" }} >
                       Xóa
                    </Button>  </Option>
                </Select>
            )
        },
    },
  ];
  const onRemove = async (id) => {
   
    const confirm = window.confirm("Bạn muốn xóa banner không ?");
    if (confirm) {
      await httpDeleteBanner(id);
      setData(data.filter((item) => item._id !== id));
      console.log(data);
      message.success("Xóa thành công")
    }
  
  };


  return (
    <>
      <div className="w-full px-6 py-6 mx-auto">
        <div>
          <h1 className="w-[1200px] m-auto text-center mb-0 font-bold text-white capitalize pb-[20px]  text-[50px]">
            <div>Banner</div>
          </h1>
        </div>
        <Link to={"/admin/banner/add"}>
          <Button type="primary">Primary Button</Button>
        </Link>
      </div>
      <div className="w-full px-6 py-6 mx-auto">
        <Table columns={columns} dataSource={data} />
      </div>
      ;
    </>
  );
};

export default ListBanner;
