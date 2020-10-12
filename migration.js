try {
  //window.autopilot.log("start script");

  const isPublished = window.autopilot.isPublishedRevision;

  //window.autopilot.log("updating component label");
  //window.autopilot.log("end script");

  window.autopilot.reportResult(
    `This was a simple jsonp migration on the ${
      isPublished ? "published" : "last saved"
    } revision`
  );
} catch (e) {
  window.autopilot.reportError(e);
}
