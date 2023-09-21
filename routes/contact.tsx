import ImageCard from "../components/ImageCard.tsx";

function formatPhoneNumber(phoneNumber: string) {
  const splitNumbers = phoneNumber.match(/.{1,3}/g);
  if (splitNumbers && splitNumbers.length > 1) {
    const lastChunk = splitNumbers.pop();
    const restChunks = splitNumbers.join(" ");
    return `${restChunks} ${lastChunk}`;
  }
  return phoneNumber;
}

export default function Contact() {
  const props = { title: "Contact Us", img: "./images/contact.webp" };
  const email = "georgie@theautismshed.com";
  const telephone = "07875409036";

  return (
    <>
      <ImageCard {...props} />
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="p-4">
            <div className="text-left">
              <p>You can contact us using the following methods:</p>
            </div>
            <div className="text-left mt-4">
              <p>
                <strong>Telephone{" "}</strong>
                <a href={`tel:${telephone}`}>{formatPhoneNumber(telephone)}</a>
              </p>
            </div>
            <div className="text-left mt-4">
              <p>
                <strong>Email{" "}</strong>
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="p-4">
            <div className="text-left">
              <h3>Contact us</h3>
            </div>
            <div className="text-left mt-4">
              <p>
                To contact us or book an appointment you can email our
                administrators on <a href={`mailto:${email}`}>{email}</a>{" "}
                or phone on{" "}
                <a href={`tel:${telephone}`}>{formatPhoneNumber(telephone)}</a>.
              </p>
              <p>
                If you get in contact, please add{" "}
                <a href={`mailto:${email}`}>{email}</a>{" "}
                to your email contacts list to avoid our emails falling victim
                to your spam filter
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
