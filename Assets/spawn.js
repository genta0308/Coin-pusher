var prefab:GameObject;
function Start () {

}

function Update () {
if (Input.GetMouseButtonDown(0)) {
    var offs=Vector3(Mathf.Sin(Time.time*7),0,0);
    Instantiate(prefab,transform.position+offs,transform.rotation);
    score.score -= 1;

}
}
