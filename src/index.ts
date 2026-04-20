/**
 * CE.SDK Layouts Editor Starterkit - Main Entry Point
 *
 * A design editor with pre-designed layout templates that can be applied to pages.
 * Users can choose from various layouts and apply them dynamically while preserving content.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import { initLayoutsEditor } from './imgly';
import { resolveAssetPath } from './imgly/resolveAssetPath';

// ============================================================================
// Configuration
// ============================================================================

const config = {
  userId: 'starterkit-layouts-asset-source-user'

  // Local assets
  // baseURL: `/assets/`,

  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',
};

// ============================================================================
// Initialize Layouts Editor
// ============================================================================

CreativeEditorSDK.create('#cesdk_container', config)
  .then(async (cesdk) => {
    // Debug access (remove in production)
    (window as any).cesdk = cesdk;

    // Initialize the editor with layouts functionality
    await initLayoutsEditor(cesdk);
    // ============================================================================
    // Scene Loading
    // ============================================================================

    // Load the custom layouts scene with pre-designed content
    await cesdk.loadFromURL(
      resolveAssetPath('/assets/custom-layouts.scene')
    );
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to initialize CE.SDK:', error);
  });
