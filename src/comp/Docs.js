import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import DOMPurify from 'dompurify';
import md5 from 'md5';
import Loader2 from './Loader2';

const Docs = () => {

    const [docs, setDocs] = useState([]);
    const [selectedDoc, setSelectedDoc] = useState(null); // State to store the selected document
    const [docContent, setDocContent] = useState(''); // State to store the content of the selected document
    const [loading, setLoading] = useState(false); // State to store the content of the selected document

    const clientId = "928209376096-38u5an1f1upp4i48lpah6c5st16coc0b.apps.googleusercontent.com";
    // const clientId = "928209376096-51aefs784odgcc5a57766briknp57i6c.apps.googleusercontent.com"; for local

    const apiKey = "AIzaSyBcyi-E1WIfj3gvWVUk6jc4erXAAgw2PFM";
    const discoveryDocs = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
    const scope = "https://www.googleapis.com/auth/drive.readonly";

    const initClient = () => {
        gapi.client.init({
            apiKey: apiKey,
            clientId: clientId,
            discoveryDocs: discoveryDocs,
            scope: scope
        }).then(() => {
            console.log("GAPI client initialized.");
            gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
            updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        }, (error) => {
            console.error("Failed to init GAPI client", error);
        });
    };

    const signIn = async () => {
        const auth2 = gapi.auth2.getAuthInstance();
        await auth2.signIn({
            scope: scope
        });
        console.log(auth2.currentUser.get().getAuthResponse().access_token);
        localStorage.setItem("user_token", auth2.currentUser.get().getAuthResponse().access_token);
    };

    const updateSigninStatus = (isSignedIn) => {
        if (isSignedIn) {
            console.log("Logged in!");
            listDocs();
        } else {
            console.log("Not logged in.");
            signIn();
        }
    };

    const listDocs = () => {
        setLoading(true)
        gapi.client.drive.files.list({
            'pageSize': 10,
            'fields': "nextPageToken, files(id, name, mimeType, owners, webViewLink, createdTime, modifiedTime, description)"
        })
            .then((response) => {
                setLoading(false)
                const files = response.result.files.map(file => ({
                    ...file,
                    reasonSuggested: getReasonSuggested(file)
                }));
                console.log('Files:', files);
                setDocs(files);
            });
    };

    const getReasonSuggested = (file) => {
        const modifiedDate = new Date(file.modifiedTime);
        const now = new Date();
        const timeDiff = Math.abs(now - modifiedDate);
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if (diffDays <= 1) {
            return `You modified • ${modifiedDate.toLocaleTimeString()}`;
        } else if (diffDays <= 7) {
            return `You modified • ${modifiedDate.toLocaleDateString()}`;
        } else {
            return `You modified • ${modifiedDate.toLocaleDateString()}`;
        }
    };

    useEffect(() => {
        gapi.load('client:auth2', initClient);
    }, []);

    const getFileIcon = (mimeType) => {
        switch (mimeType) {
            case 'application/vnd.google-apps.document':
                return 'https://img.icons8.com/color/48/000000/google-docs.png';
            case 'application/vnd.google-apps.spreadsheet':
                return 'https://img.icons8.com/color/48/000000/google-sheets.png';
            case 'application/vnd.google-apps.presentation':
                return 'https://img.icons8.com/color/48/000000/google-slides.png';
            case 'application/vnd.google-apps.folder':
                return 'https://img.icons8.com/color/48/000000/folder-invoices.png';
            default:
                return 'https://img.icons8.com/color/48/000000/file.png';
        }
    };

    const getGravatarUrl = (email) => {
        const hash = md5(email.trim().toLowerCase());
        return `https://www.gravatar.com/avatar/${hash}?d=identicon`;
    };

    console.log(docs);

    return (
        <div className="container">
            {/* <div className="header">
                <h1>Google Drive Files</h1>
                <button className="button" onClick={signIn}>Sign in with Google</button>
            </div> */}
            {docs?.length === 0 ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '80vh',
                }}>
                    <Loader2 />
                </div>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Reason suggested</th>
                            <th>Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {docs.map((doc, index) => (
                            <tr key={index} style={{ cursor: "pointer" }} onClick={() => {
                                window.location.href = doc.webViewLink
                            }}>
                                <td className="file-name">
                                    <img className="icon" src={getFileIcon(doc.mimeType)} alt="icon" />
                                    <span>{doc.name}</span>
                                </td>
                                <td>{doc.reasonSuggested}</td>
                                <td className="owner">
                                    {doc.owners && doc.owners.length > 0 && (
                                        <>
                                            <img src={getGravatarUrl(doc.owners[0].emailAddress)} alt="owner" />
                                            <span>{doc.owners[0].displayName}</span>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Docs;
