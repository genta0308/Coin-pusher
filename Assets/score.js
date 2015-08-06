#pragma strict
static var score : int;

function Awake(){
    score = 30;
}

function Start () {

}

function Update () {
  GetComponent.<GUIText>().text = score.ToString();

}
