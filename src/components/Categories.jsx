import React,{useState}from 'react'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import { Form } from 'react-bootstrap';
import { addCategory } from '../services/allApi';
import { toast } from 'react-toastify';
import CategoryList from './CategoryList';

function Categories() {
  
  const[category,setCategory]=useState({
    name:'',videos:[]
  })
   const [addStatus,setAddStatus]=useState({})
  const [show, setShow] = useState(false);


  const getCategory=(val)=>{
    if(val){
      setCategory({...category,name:val})
    }
  }

  const handleAdd=async()=>{
    console.log(category)
    if(category.name){
      const res=await addCategory(category)
      if(res.status>=200 && res.status<300){
        toast.success("Category Added Successfully!!")
        handleClose()
        setAddStatus(res.data)
      }
      else{
        toast.error("Category Adding Failed!!")
      }
    }
    else{
      toast.info("Enter Valid Data!!")
    }
  }

  const handleClose = () => {
  setShow(false)
  setCategory({
    name:'',videos:[]
  })
}
  const handleShow = () => setShow(true);

  return (
    <>
     <div className='d-grid'>
     <button variant='primary' className='btn' onClick={handleShow}Add Category></button>


     </div>
     <Button className=' flex-row justify-content-between p-9 btn-warning' variant="primary" onClick={handleShow}>
        Add Category
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Category Name</Form.Label>
        <Form.Control onChange={(e)=>{getCategory(e.target.value)}} type="text" placeholder="Enter Category Name" />
      </Form.Group>
      </Form>

        </Modal.Body>
        <Modal.Footer className='justify-content-center'>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <Button  variant="primary" onClick={handleAdd}>ADD</Button>
        </Modal.Footer>
      </Modal>
      <CategoryList status={addStatus}/>
    </>
   
  )
}

export default Categories