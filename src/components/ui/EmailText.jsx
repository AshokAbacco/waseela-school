/** Lets long addresses wrap cleanly before the "@" instead of mid-word. */
export default function EmailText({ email }) {
  const [user, domain] = email.split("@");
  return (
    <>
      {user}
      <wbr />@{domain}
    </>
  );
}
