export default function LocationCard(record) {
    console.log(record.props.placeVisit);

    if (record.props.placeVisit === undefined) {
        return null;
    }

    // fucntiuon that converts date into a string
    function convertDate(date) {
        let newDate = new Date(date);
        return newDate.toUTCString();
    }

    function timeBetweenDates(date1, date2) {
        let string; // string to be returned
        // hours between two dates
        let newDate1 = new Date(date1);
        let newDate2 = new Date(date2);
        let difference = newDate2.getTime() - newDate1.getTime();
        let total
        if (difference > 0) {
            total = {
              weeks: Math.floor(difference / (1000 * 60 * 60 * 24 * 7)),
              days: Math.floor(difference / (1000 * 60 * 60 * 24) % 7),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60),
            };
        } 
        // loop throught the object and add the values to the string
        for (let key in total) {
            console.log(total[key]);
            if (total[key]) {
                string += total[key] + " " + key + " ";
            }
        }

        return string
    }


    return (
        <div className="location-card">
            <div className="location-card__title">
                <h2>{record.props.placeVisit.location.address == "5003 Malibu Dr, Charlotte, NC 28215-1539, USA" ? "Home" : record.props.placeVisit.location.name ? record.props.placeVisit.location.name : "undefined" }</h2>
                <p>Long: {record.props.placeVisit.location.latitudeE7 * 0.0000001}</p>
                <p>Latt: {record.props.placeVisit.location.longitudeE7 * 0.0000001}</p>
                <p>Long/Lat Pair: {`${record.props.placeVisit.location.latitudeE7 * 0.0000001},${record.props.placeVisit.location.longitudeE7 * 0.0000001}`}</p>
                <p>Location Confidance: {record.props.placeVisit.placeConfidence} </p>
                <p>address: {record.props.placeVisit.location.address}</p>
                <p>Duration: {convertDate(record.props.placeVisit.duration.startTimestamp)} - {convertDate(record.props.placeVisit.duration.endTimestamp)}</p>
                <p>Duration: {timeBetweenDates(record.props.placeVisit.duration.startTimestamp, record.props.placeVisit.duration.endTimestamp)}</p>
            </div>
        </div>
   
    )


}