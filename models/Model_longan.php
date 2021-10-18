<?php
class Model_longan extends CI_Model {

    public function __construct() {
        $this->load->database();
    }

    public function get_longan($id) {
        if($id != FALSE) {
        $query = $this->db->get_where('Kelengkeng', array('id' => $id));
        return $query->row_array();
    }
        else {
        return FALSE;
        }
    }

    public function save_longan($data) {
        if($data != FALSE) {
        $insert = array(
            'id' => $data['id'],
            'status' => $data['status'],
            'umur' => $data['umur'],
            'w_tanam' => $data['w_tanam']
        );
        $query = $this->db->insert('Kelengkeng', $insert);
        return $query;
    }
        else {
        return FALSE;
        }
    }

    public function get_umur($tanam) {
        if($tanam != NULL) {
            $umur1 = explode('-',$tanam);
            $umur2 = date("Y");
            $umur = $umur2 - $umur1[0];
            return $umur;
        }
        else {
            return FALSE;
        }
    }

}
?>