#pragma strict
var origin : Vector3;

function Awake(){
  origin=GetComponent.<Rigidbody>().position;
}

function Start () {

}

function Update () {
  var offs=Vector3(0,0,Mathf.Sin(Time.time));
  GetComponent.<Rigidbody>().MovePosition(origin+offs);
}
