<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>QR Stats Lengkeng No : <?php echo $nomor ?></title>

	<style type="text/css">
    @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans);

body {
  background-color: antiquewhite;
}

.card {
  background-color: #f4f4f4;
  width: 300px;
  margin: 10px auto;
  box-shadow: 1px 1px 10px 1px rgba(0,0,0,0.7);
}

.card-header {
  overflow: hidden;
  width: 100%;
  max-height: 200px;
}

.card-header img{
  width: 100%;
}

.card-content {
  width: 85%;
  margin: 35px auto;
}

.card-content h3 {
  font-size: 25px;
  margin-bottom: 0;
  color: #303F9F;
  font-family: 'Montserrat', sans-serif;
}

.card-content h4 {
  font-size: 14px;
  margin-top: 0;
  color: #FF5252;
  font-family: 'Montserrat', sans-serif;
}

.card-content p {
  color: #727272;
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
  
}

.card-footer {
  border-top: solid 1px #B6B6B6;
  padding: 5px;
}

.card-footer ul {
  padding: 0;
  width: 90%;
  margin: auto;
  text-align: center;
}

.card-footer ul li{
  display: inline-block;
  list-style: none;
  margin: 5px;
}

.card-footer ul li i {
  font-size: 2em;
  color: #3F51B5;
}
</style>
</head>
<body>
<div class="card">
  <div class="card-header">
    <img src="https://s-media-cache-ak0.pinimg.com/originals/3b/f0/77/3bf0775b0d234545d14a5941be966ab2.jpg"/>
  </div>
  <div class="card-content">
    <h3>Kelengkeng</h3>
    <h4><i>Dimocarpus longan</i> </h4>
    <p>Nomer Kelengkeng : <?php echo $nomor ?> </p>
		<p>Status : <?php echo $status ?> </p>
		<p>Umur : <?php echo $umur ?> Tahun</p>
  </div>
  <div class="card-footer">
    <ul>
      <li>
        <a href="#"><i class="fa fa-codepen"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa fa-stack-overflow"></i></a>
      </li>
      <li>
        <a href="#"><i class="fa fa-github"></i></a>
      </li>
    </ul>
  </div>
</div>
</body>
</html>