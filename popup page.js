<! DOCTYPE html>
<html>
<head>
<style> 
.popup { 
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.popup .popuptext {
  width: 200px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}
</style>
</head>

<div class="popup" onclick="myFunction()">Click me to toggle the popup!
  <span class="popuptext" id="myPopup">A Simple Popup!</span>
</div>