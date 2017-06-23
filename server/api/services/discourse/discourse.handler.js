import Rx from 'rx';

export default function discourseHandler(r) {

  const polNumEntity = r.entities.find(e => e.entity === 'PolicyNum')
  if (polNumEntity){
    // var re = '/\d{11}/';
    // var polNumStart = r.input.text.search(re);
    // r.context.polNum = r.input.text.substr(polNumStart,11);
    r.output.polNum = "PolNum detected";
  }
  if (r.intents.length === 0) {
    return Rx.Observable.just(r);
  }
      


  switch (r.intents[0].intent) {
    case 'Uwstatus':
      // if (park) {
      //   r.output.park = park;
      // } 
      return Rx.Observable.just(r);

    default:
      return Rx.Observable.just(r);
  }
}
