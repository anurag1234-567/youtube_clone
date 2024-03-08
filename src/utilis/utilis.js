import moment from "moment";

export const formatCount = (views) => {
    if(!views) return "";

    if (views > 1000000) {
        return (views / 1000000).toFixed(1) + "M";
    } else if (views > 1000) {
        return (views / 1000).toFixed(1) + "K";
    } else if(views === 0){
        return "";
    } else{
        return views.toString();
    }
}

export const formatDate = (date)=>{
    return moment(date).fromNow();
}

export const formatDuration = (durationString) =>{
    const duration = moment.duration(durationString);

    let formattedDuration;
    if (duration.asHours() >= 1) {
        formattedDuration = moment.utc(duration.asMilliseconds()).format("H:mm:ss");
    } else {
        formattedDuration = moment.utc(duration.asMilliseconds()).format("m:ss");
    }

    return formattedDuration;
}