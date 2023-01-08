import { useEffect, useRef, useState } from "react";
import instanceAxios from "../../config/baseAxios";
import styles from "../css/upload.module.css"

import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

function UploadPage() {

  function onSubmit(event:any){
    event.preventDefault()
    
    const formData = new FormData();
  }

  return (
    <form className={styles.area}>
      <div className={styles.flexbox}>
        <div className={styles.item}>
          <div className={styles.title}>
            <Form.Label> title </Form.Label>
            <Form.Control type="text" />
          </div>
          <div className={styles.category}>
            <Form.Label> category </Form.Label>
            <Form.Control type="text"/>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.author}>
            <Form.Label> author </Form.Label>
            <Form.Control type="text" />
          </div>
          <div className={styles.edition}>
            <Form.Label> edition </Form.Label>
            <Form.Control type="text" />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.publication_year}>
            <Form.Label> publication year</Form.Label>
            <Form.Control type="text" />
          </div>
          <div className={styles.ISBN}>
            <Form.Label> ISBN </Form.Label>
            <Form.Control type="text" />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.page}>
            <Form.Label> page </Form.Label>
            <Form.Control type="text" />
          </div>
          <div className={styles.language}>
            <Form.Label> language </Form.Label>
            <Form.Control type="text" />
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.file}>
            <Form.Control type="file" />
          </div>
          <div className={styles.btn}>
            <Button>submit</Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default UploadPage;