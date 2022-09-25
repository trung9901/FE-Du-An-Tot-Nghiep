import React, { useEffect } from "react";
import { Button, Modal, Radio } from "antd";
import { useState } from "react";
import useEmployee from "../../hooks/use-employee";
import moment from "moment";

const EmployeeModal = (props) => {
  // const { data: employee, get, error } = useEmployee();
  // const [employee, setEmployee] = useState();
  //   const opens = props.open;

  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };

  const [shiflt, setShiflt] = useState();
  const onChange = (e) => {
    setShiflt(e.target.value);
    // console.log(`radio checked: ${e.target.value}`);
  };
  const handleOk = () => {
    console.log(shiflt);
    // props.onAdd(shiflt);
  };
  const handleCancel = () => {
    // console.log('Clicked cancel button');
    setOpen(false);
  };
  // useEffect(() => {
  //   setEmployee(get(props.id));
  // }, []);
  const employee = "";
  const error = "";
  if (error) return <div>Request Failed</div>;
  if (!employee) return <div>Loading...</div>;
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
      >
        <div className="">
          {employee?.map((item) => (
            <div className="" key={item._id}>
              <div className="">{item.name}</div>
              <div className="">{item.email}</div>
              <div className="">{item.phoneNumber}</div>
              <div className="">{item.avatar}</div>
              <div className="">
                {item.timeWork?.map((item2) => (
                  <div className="" key={item2._id}>
                    <Radio.Group onChange={onChange} defaultValue="a">
                      <Radio.Button value={item2.shiftId}>
                        {item2.shiftId}
                      </Radio.Button>
                    </Radio.Group>
                    <div className="">
                      {item2.date}-----{moment(item2.date).format("L")}
                    </div>
                    <div className="">{item2.shiftId}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default EmployeeModal;
