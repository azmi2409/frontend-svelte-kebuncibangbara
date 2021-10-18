<?php
class Longan extends CI_Controller {
    public function show($id) {
        $this->load->model('Model_longan');
        $longan = $this->Model_longan->get_longan($id);
        $data['nomor'] = $longan['id'];
        $data['status'] = $longan['status'];
        $data['umur'] = $longan['umur'];
        $this->load->view('data_longan', $data);
        if !$longan {
            return show_404();
        }
    }

    public function isi() {
        $this->load->model('Model_longan');
        $x = 2;
        for ($x = 2; $x <= 200; $x++) {
            $longan = $this->Model_longan->get_longan('1');
            $data['id'] = $x;
        $data['status'] = $longan['status'];
        $umur1 = explode('-',$longan['w_tanam']);
        $umur = date("Y") - $umur1;
        $data['umur'] = $umur[0];
        $data['w_tanam'] = $longan['w_tanam'];
        $this->Model_longan->save_longan($data); 
        }
        else {
            return show_404();
        }
    }
}    
?>