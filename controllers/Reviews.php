<?php
class Reviews extends CI_Controller {
public function show($id) {
$this->load->model('Reviews_model');
$reviews = $this->Reviews_model->get_reviews($id);
$data['title'] = $reviews['title'];
$data['grade'] = $reviews['grade'];
$this->load->view('movie_reviews', $data);
}
}
?>