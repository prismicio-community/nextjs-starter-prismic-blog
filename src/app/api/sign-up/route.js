export async function POST(request) {
  // Get data submitted in request's form.
  const form = await request.formData();
  const formData = Object.fromEntries(form.entries());

  // Optional logging to see the responses in the command line where the
  // Next.js app is running.
  console.log(formData);

  // Guard clause checks for email and returns early if it is not found.
  if (!formData.email) {
    // Sends a HTTP bad request error code.
    return res.status(400).json({
      error: "Email not found",
    });
  }
  // Here, you could send the email address to a service like Mailchimp to
  // manage your mailing list.
  //
  // This is just an example, so we won't do anything except redirect back to
  // the homepage.
  return new Response("Homepage redirect", {
    status: 302,
    headers: { Location: "/" },
  });
}
