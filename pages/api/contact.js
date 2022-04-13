export default async function handler(req, res) {
  // Get data submitted in request's body.
  const body = req.body;

  // Optional logging to see the responses in the command line where the
  // Next.js app is running.
  console.log("body: ", body);

  // Guard clause checks for email and returns early if it is not found.
  if (!body.name || !body.email || !body.message) {
    // Sends a HTTP bad request error code.
    return res.status(400).json({
      error: "One or more of the following not found: name, email, message",
    });
  }

  // Here, you could send the message to a service like Supabase to read later.
  //
  // This is just an example, so we won't do anything except redirect back to
  // the homepage.

  res.redirect(302, "/");
}
